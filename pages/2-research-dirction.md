---
transition: fade-out
layout: image-right
image: /mdl.png
routeAlias: /research-direction
clicks: 2
---

# Intro: Multimodal Deep Learning

From: ([LMU Munich, Germany](https://www.statistik.uni-muenchen.de/index.html))

## Research Direction

<br/>
<br/>

<div v-click-hide="1" v-if="$clicks < 2">
```mermaid
mindmap
root((MDL))
    Image2Text
    Text2Image
    Images supporting Language Models
    Text supporting Vision Models
    Models for both modalities
```
</div>

<div v-if="$clicks >= 2">
```mermaid
mindmap
  root{{Text supporting Vision Models}}
    1.Words In Contexts
    2.Word-Embeddings: Survival-Kit
    3.The Beginning: Sequential Multimodal Embeddings
    4.The Grounded Space
    5.The Transformers Era
        5.1.Vokenization
        5.2.One Step Further: The Power Of Imagination
    6.Was It Worth?
```
</div>

Read more about [Multimodal Deep Learning](https://arxiv.org/abs/2301.04856)