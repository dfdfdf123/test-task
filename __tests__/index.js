import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../src/reducers';
import App from '../src/components/App';

Enzyme.configure({ adapter: new Adapter() });