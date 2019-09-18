/* eslint-disable no-undef */
import { shallow, mount } from 'enzyme'
// import toJson from 'enzyme-to-json'

import Homepage from '../index';
import { historyUser } from '../../../app/store/actions/LandingPage';

describe("Unit Test", ()=>{
    describe("Component <Index />", () => {
        it("should be definded", () =>{
            expect(Homepage).toBeDefined();
        })
        it("should match to snapshot", () => {
            const wrapper = shallow(<Homepage/>)
            expect(wrapper).toMatchSnapshot();
        })
        it('should be render form', () => {
            const wrapper = mount(<Homepage/>).find(
                <div className="form-group__container">
                    <input className=""/>
                </div>
            )
            expect(wrapper).toBeDefined()
        })
    })

    describe("Redux Actions Landing page ",() => {
        it("should update history reducer", () => {
            const data = [{data: '1'},{data: '2'}]
            const wrapperRedux = historyUser(data);

            const expectPayload = {
                payload: data,
                type: 'HISTORY_SEARCH'
            }
            expect(wrapperRedux).toEqual(expectPayload)
        })
    })
});