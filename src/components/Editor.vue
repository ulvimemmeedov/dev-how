<template>
  <div class="editor-div container">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Editor",
  
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>write new post</p>",
      editorConfig: {

      },
    };
  },
};
</script>
<style scoped>
.editor-div{
    margin-top: 5px;
    border:3px solid transparent !important;
    padding: 10px !important;
    border-radius: 15px !important;
    background-color: #fafafa;
}
</style>