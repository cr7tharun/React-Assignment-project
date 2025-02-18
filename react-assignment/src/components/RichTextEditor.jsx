import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(content);
    }
  }, [content]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.getContent();
      setContent(newContent);
      localStorage.setItem('editorContent', newContent);
    }
  };

  return (
    <Container sx={{ padding: 4, maxWidth: '800px', marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Rich Text Editor
      </Typography>
      <Editor
        apiKey="vp9p6fvy3on1ukw2zrjclvn918z0mgnzrwj3aucrem9et1dy" 
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content} 
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'emoticons',
            'textcolor',
            'directionality',
            'fullscreen',
            'code',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline strikethrough | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | emoticons | ' +
            'forecolor backcolor | ltr rtl | fullscreen | code | help',
          content_style:
            'body { font-family:Arial,Helvetica,sans-serif; font-size:14px; padding: 10px; }',
        }}
        onEditorChange={handleEditorChange} 
      />
    </Container>
  );
};

export default RichTextEditor;
