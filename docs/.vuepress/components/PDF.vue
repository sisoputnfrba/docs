<template>
  <div class="pdf-link">
    <a :href="`/pdf${$page.path.replace('.html', '.pdf')}`">
      <img class="pdf-icon" src="/img/PDF.svg" alt="PDF" />
      Ver en PDF (beta)
    </a>
  </div>
</template>

<style>
  .pdf-link {
    display: grid;
    width: 100%;
    text-decoration: none;
    justify-content: start;
  }
  .pdf-icon {
    display: inline-block;
    width: 16.3px;
    height: 13.45px;
    overflow: hidden;
  }

  @media (min-width: 960px) {
    .pdf-link {
      margin-top: 2rem;
    }
  }
</style>
