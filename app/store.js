
import socrates from 'socrates';

// Component State/Reducer Trees.
// Rather than a complex registry system, we explicitly import them here. Some coupling
// to components, but simplicity is king here.
import { boot } from 'App/store';

const store = socrates({
  boot,
});

// store.subscribe((state) => console.log(state));

store('boot', {
  test: 'store test',
});

/**
 * var store = Socrates({
  // run with type: "boot"
  boot(state, action) {
    return action
  },
  user: {
    // run with type: "update user"
    update(state, action) {
      return action
    },
    settings: {
      // run with type: "change user.settings"
      change(state, action) {
        // state & action only contain the relevate data
        // you only need to return an action, because socrates
        // updates, doesn't replace.
        // 3. state = { theme: "red" }
        // 4. action = { theme: "blue" }
        return action
      }
    }
  }
})

// 1. boot up socrates with our initial state
// 2. change the user settings
store(
  {
    type: 'boot',
    payload: {
      user: {
        name: 'matt',
        age: 26,
        settings: {
          theme: 'red'
        }
      }
    }
  },
  {
    type: 'change user.settings',
    payload: { theme: 'blue' }
  }
})
 */

export default store;
