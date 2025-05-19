# todo-redux
1: npm install @reduxjs/toolkit react-redux
2: Create a Redux Slice
3:Create and Configure the Store

4:Provide the Store to React App: import { Provider } from 'react-redux';
                                  import { store } from './app/store';
                                  <Provider store={store}>
                                        <App />
                                      </Provider>,
5: Use Redux in Components: import { useDispatch, useSelector } from 'react-redux';
