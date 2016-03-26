
import socrates from 'socrates';

// Component State/Reducer Trees.
// Rather than a complex registry system, we explicitly import them here. Some coupling
// to components, but simplicity is king here.
import { boot } from 'App/store';

const store = socrates({
  boot,
});

// @NOTE BEGIN TEST CODE
store('boot', {
  test: 'Init.',
});

setTimeout(() => {
  store('boot', {
    test: 'Later Update',
  });
}, 500);
// @NOTE END TEST CODE

export default store;
