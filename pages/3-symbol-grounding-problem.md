---
transition: slide-up
---
# Words In (Non-Symbolic) Contexts

<div v-if="$clicks < 3">

<p data-v-d24dde4e="">Symbol Grounding Problem <sup data-v-d24dde4e="" class="footnote-ref"><a data-v-d24dde4e="" href="#fn1" id="fnref1">[1]</a></sup>:</p>

<v-clicks>

- It asserts that it is not possible to understand the meaning (semantics) of a word by just looking at other words because words are essentially meaningless symbols. 

- It is possible to understand the meaning only if **the word is put in a context**, **a perceptual space**, other than that of written language: the word **must be grounded in non-symbolic representations, like images**, for example.

- [ChatGPT大模型技术争议与符号奠基问题](https://zhuanlan.zhihu.com/p/609541999)

</v-clicks>

<section data-v-d24dde4e="" class="footnotes"><ol data-v-d24dde4e="" class="footnotes-list"><li data-v-d24dde4e="" id="fn1" class="footnote-item"><p data-v-d24dde4e="">(Harnad, S. (1990). The symbol grounding problem. 42(1-3):335–346.) <a data-v-d24dde4e="" href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>

</div>

<div v-if="$clicks >= 3">
<v-clicks depth ="2">

- Distributional Semantic Models (DSM)
  - This family of models assumes that **the meaning of words and sentences can be inferred by the “distribution” of those words and sentences** within a text corpus (the **Distributional Hypothesis** formulated by Harris et al. (1954)).
  - But the Symbol Grounding Problem mentioned earlier suggests that **DSMs do not resemble the way words are learned by humans**, which is in multimodal perceptual contexts.
  - For these reasons, models have been developed with the goal to integrate further modalities (like visual ones) in pure language models, assuming that **grounding words and sentences in other perceptual contexts** should lead to a better understanding of their semantics and, as a result, to better performance in pure language tasks.
  
</v-clicks>

</div>

