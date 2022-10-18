<template>
  <div class="pdf-link">
    <a :href="`/pdf${$page.path.replace('.html', '.pdf')}`">
      <img class="pdf-icon" src="/img/PDF.svg" alt="PDF" />
      Descargar PDF
    </a>
  </div>
</template>

<style>
  .pdf-link {
    display: grid;
    width: 100%;
    justify-content: end;
    text-decoration: none;
    margin-top: 1rem;
  }
  .pdf-icon {
    display: inline-block;
    width: 16.3px;
    height: 13.45px;
    overflow: hidden;
  }
</style>
