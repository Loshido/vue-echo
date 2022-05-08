import { defineStore } from 'pinia'

export const useStore = defineStore('main',{
    state: () => {
        return {
            article: null,
            pinned: false
        }
    },
    actions: {
        clicked(item) {
            console.log(item)
            this.article = item
        }
    }
});

// @template
///////////////////////////////////////////////////////
// import { useStore } from '@/stores/counter'
// export default {
//   setup() {
//     const store = useStore()
//     return {
//       store,
//     }
//   },
// }
///////////////////////////////////////////////////////