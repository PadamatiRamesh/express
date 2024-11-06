import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './app.js', // or wherever your main entry file is
      name: 'MyLibrary',
      fileName: 'my-library',
    },
  },
});
