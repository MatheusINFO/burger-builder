import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './index';
import NavigationItem from './NavigationItem';

configure({
    adapter: new Adapter()
});

// O nome e a descrição do que o componente deve fazer
describe('<NavigationItems/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    });

    it('should render two <NavigationItem/> elements if not authentication', () => {
        //Verifico se tem 2 Navigation Item
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem/> elements if authentication', () => {
        //Verifico se tem 3 Navigation Item
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render one <NavigationItem link="/"/>  if authentication', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Sair</NavigationItem>));
    });
});