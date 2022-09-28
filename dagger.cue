package main

import (
	"dagger.io/dagger"
	"dagger.io/dagger/core"

	"universe.dagger.io/bash"
	"universe.dagger.io/docker"
	"universe.dagger.io/yarn"

	//"universe.dagger.io/alpha/codecov"
)

dagger.#Plan & {
	client: {
		filesystem: build: write: contents: actions.build.output
		env: {
			CI:                string | *""
			GITHUB_ACTIONS:    string | *""
			GITHUB_ACTION:     string | *""
			GITHUB_HEAD_REF:   string | *""
			GITHUB_REF:        string | *""
			GITHUB_REPOSITORY: string | *""
			GITHUB_RUN_ID:     string | *""
			GITHUB_SERVER_URL: string | *""
			GITHUB_SHA:        string | *""
			GITHUB_WORKFLOW:   string | *""
			GITHUB_TOKEN?:     dagger.#Secret
			GIT_TAG:           string | *""
			GITHUB_REF_NAME:   string | *""
			GITHUB_REF_TYPE:   string | *""
		}
	}
	actions: {
		_source: core.#Source & {
			path: "."
			exclude: [
				"node_modules",
				"build",
				".svelte-kit",
			]
		}
		lint: yarn.#Script & {
			source: _source.output
			name:   "lint"
		}
		build: yarn.#Build & {
			source: _source.output
		}
		test: {
			pull: docker.#Pull & {
				source: "mcr.microsoft.com/playwright:v1.26.1-focal"
			}
			copy: docker.#Copy & {
				input:    pull.output
				contents: _source.output
			}
			run: bash.#Run & {
				input: copy.output
				script: contents: """
					yarn install
					yarn run test
					"""
			}
		}
	}
}
