import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
      }
    }
  })]
})


/**
 * 
 * import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === 'exp1') {
    return {
      base: '/exp1/',
      outDir: 'dist/exp1'
    }
  } else if (mode === 'exp2') {
    return {
      base: '/exp2/',
      outDir: 'dist/exp2'
    }
  } else {
    return {}
  }
})

/**
 * 
 * {
  "name": "crowdeval-image-schemas",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build --base=/exp1/ --outDir=dist/exp1",
    "preview": "vite preview"
  },
  "dependencies": {
    "dotenv": "^16.0.0",
    "vue": "^3.2.25",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.2.0",
    "vite": "^2.8.0"
  }
}

 */
