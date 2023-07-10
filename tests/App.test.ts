import { mount, flushPromises } from '@vue/test-utils';
import AppVue from '../src/App.vue';
import TodosGateway from '../src/infra/gateway/TodosGateway';

test('should test the empty todolist', async () => {
  const todosGateway: TodosGateway = {
    async getTodos() {
      return [];
    }
  };

  const wrapper = mount(AppVue, {
    global: {
      provide: {
        todosGateway,
      },
    }
  });

  await flushPromises();
  expect(wrapper.get('.total').text()).toBe('Total: 0');
  expect(wrapper.get('.completed').text()).toBe('Completed: 0%');
});

// test('should test the todolist with one completed todo', async () => {
//   const todosGateway: TodosGateway = {
//     async getTodos() {
//       return [{
//         title: 'first todo',
//         completed: true,
//         toggleCompleted: () => {}
//       }];
//     }
//   }

//   const wrapper = mount(AppVue, {
//     global: {
//       provide: {
//         todosGateway,
//       },
//     }
//   });

//   await flushPromises();
//   expect(wrapper.get('.total').text()).toBe('Total: 1');
//   expect(wrapper.get('.completed').text()).toBe('Completed: 100%');
//   await wrapper.get('input').setValue('A');
//   await wrapper.get('.add-new-todo').trigger('click');
//   expect(wrapper.get('.total').text()).toBe('Total: 2');
// });
