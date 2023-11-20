<script setup lang="ts">
import { useConfirmDialog, useStorage } from '@vueuse/core'

const message = ref('')
const revaled = ref(true)
const dialog = useConfirmDialog(revaled)
const moreBtn = ref(false)

dialog.onConfirm((result) => {
  if (result) {
    message.value = 'Comments awailable - wait two seconds!'
    localStorage.setItem('app-store', '{"comments": "true"}')
    const timer = setTimeout(() => {
      const element = document.querySelector('[class="cookie-box"]')
      element.setAttribute('style', 'display: none')
      clearTimeout(timer)
    }, 3000)
  } else {
    message.value = 'You have rejected and can NOT add a comment!'
    localStorage.setItem('app-store', '{"comments": "false"}')
    const timer = setTimeout(() => {
      revaled.value = true
      moreBtn.value = false
      message.value = ''
      clearTimeout(timer)
    }, 4000)
  }
})

dialog.onCancel(() => {
  dialog.reveal()
  message.value = 'The coockies is created by https://giscus.app (and not by the owner of this website).'
  moreBtn.value = true
})

const state = useStorage(
  'app-store',
  { comments: 'false' },
  localStorage,
  { mergeDefaults: true } // use saved value if exist
)
const accepted = state.value.comments
</script>

<template>
  <div
    v-if="accepted === 'false'"
    class="cookie-box"
  >
    <div name="header">
      <h3 class="text-xl">
        Cookies
      </h3>
      <p>Do you accept cookies (on commenting)?</p>
      <h4 class="text-slate-950">
        {{ message }}
      </h4>
    </div>
    <div v-if="revaled">
      <footer class="flex justify-center mt-2 mb-2">
        <button @click="dialog.confirm(true)">
          Accept
        </button>

        <button
          @click="dialog.confirm(false)"
        >
          Reject
        </button>

        <button
          :class="moreBtn && 'more-active'"
          @click="dialog.cancel"
        >
          More
        </button>
      </footer>
    </div>
  </div>
</template>

<style lang="css" scooped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
.modal-layout{
  z-index: 20;
  left: 0;
  top: 0;
  position: fixed;
  background-color: #7c7c7c7a;
  width: 100%;
  height: 100%;
}
.inner {
  background-color: var(--vp-c-bg);
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}
.small {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}
.button:focus {
  outline: rgb(91, 91, 255) solid 3px;
}
.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom:2rem;
}

footer button {
  padding: 3px 16px;
  margin-right: 30px;
  border: solid rgba(0, 0, 0, 0.32);
  border-width: 2px;
  transition-duration: 0.4s;
}

footer button:hover {
  background-color: white; /* Green */
  border: solid rgb(47, 46, 46);
  border-width: 2px;
  color: black;
}

.more-active {
  background-color: grey;
}

@media screen and (max-width: 600px) {
   .cookie-box {
      width: 96.9%;
   }
}
@media screen and (min-width: 1000px) {
   .cookie-box {
      width: 97.9%;
   }
}
@media only screen and (min-width: 600px) and (max-width: 1000px)  {
  .cookie-box {
      width: 97.5%;
   }
}

.cookie-box {
  opacity: 0.9;
  padding-top: 6px;
  padding-left: 20px;
  color: white;
  background: slategray;
  position: absolute;
  bottom: 13px;
  left: 9px;
  border-width: 0 2px;
}

/*
Source
https://nuxt-content-pwa.vercel.app/blog/v1.0.1
https://vueuse.org/core/useConfirmDialog/#useconfirmdialog
https://github.com/vueuse/vueuse/blob/main/packages/core/useConfirmDialog/demo.vue
# ABOUT TOGGLE CLASS
https://stackoverflow.com/questions/33731939/vue-js-toggle-class-on-click
https://play.vuejs.org/#eNp9kU9uEzEUxq9iZtG0UjOjqrthGgFRJWABqGTpzdR5M3HqsS37OU0U5QQsECfoQbhUj8CzTdOhAnZ+/z7/3vf2xVtry02Aoi4aL5y0yDxgsDOu5WCNQ7ZnDjp2YJ0zA5tQ64RrxrgWRntk0i9gizewZFex77RrlYczrrugBUqjGZq+VzBXrfenZ2wfZ48z5aZVAWjy1YsU1weumyoDEQoFCINVLQJFjDWrC1aLqHnFi2eEkxM26VotdlNhlHETXszeSybMMAQtccceH358e3z4/rOpVhdZ5zYgEuQboaS4I60RLQ0vUkQCJNZUuZfmmmoEQ6HHHXV5YSwsKVOOEPLC6VmzuXGteh29y9vFsVlxXmSjp0Nry7U3mk6RpmizVCCSOuvEHB0gxrxYIVpfVxWB7OIF1740rq/oVbqgUQ5Qgh+mt87ce3CkzIuoQV8f6E8kXN3J/sWP5JWVCtxnG4/358+tUub+Y8qhC3D+lBcrEHd/ya/9NpN+cUAEG+I+1rB1PWAuX3/9RPcbFQezDOr3lv8o3oA3KkTG3PYu6CVhj/oS7YdkoNT9wl9vEbR/WiqCJjdSf3J1/p/Vn3Evy8uji4dfwe8cdw==
https://www.tutorialspoint.com/how-to-toggle-an-element-class-in-javascript
https://softauthor.com/javascript-toggle-class-element/
*/
</style>
