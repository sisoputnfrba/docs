---
layout: home
title: Docs

hero:
  name: Sistemas Operativos
  text: UTN FRBA
  tagline: En este sitio vas a encontrar todo lo necesario para hacer el TP de Sistemas Operativos.
  image:
    src: /img/logo.gif
    alt: Tux
  actions:
    - theme: brand
      text: Blog →
      link: /blog
    - theme: alt
      text: Primeros pasos
      link: /primeros-pasos/
    - theme: alt
      text: ¡Tengo una duda!
      link: /consultas
---

<Posts :filter="(_, index) => index === 0" />
