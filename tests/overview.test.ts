import { chromium, expect, type Browser, type Page } from "@playwright/test";
import { preview, type PreviewServer } from "vite";
import { afterAll, beforeAll, describe, test } from "vitest";

describe("about", async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  test("about page has expected h1", async () => {
    await page.goto("http://localhost:3000/dashboard/overview");
    expect(await page.textContent("h2")).toBe("Overview");
  }, 60_000);
});
