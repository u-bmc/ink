<script lang="ts">
  // The ordering of these imports is critical to this app working properly
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
</script>

<slot />
