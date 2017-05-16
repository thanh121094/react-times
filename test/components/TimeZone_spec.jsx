import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TimeZone from '../../src/components/TimeZone';
import languageHelper from '../../src/utils/language';

const phrases = languageHelper.get('en');

describe('TimeZone', () => {
  describe('TimeZone render', () => {
    const mockTimezone = {
      zoneName: 'Some Zone',
      zoneAbbr: 'SZ'
    };
    const wrapper = shallow(
      <TimeZone
        phrases={phrases}
        timezone={mockTimezone}
      />
    );

    it('should render the TimeZone footer', () => {
      expect(wrapper.find('.time_picker_modal_footer_timezone')).to.have.lengthOf(1);
    });

    it('should render the TimeZone Name and Abbreviation', () => {
      expect(wrapper.find('.time_picker_modal_footer_timezone').text())
        .to.equal(`${mockTimezone.zoneName} ${mockTimezone.zoneAbbr}`);
    });
  });

  /*
   describe('when timezoneIsEditable is true', () => {
   const wrapper = shallow(
   <TwelveHoursMode
   hour={'01'}
   minute={'45'}
   focused={true}
   phrases={phrases}
   showTimezone={true}
   timezoneIsEditable={true}
   />
   );

   it('should render the TimeZonePicker', () => {
   expect(wrapper.find('TimeZonePicker')).to.have.lengthOf(1);
   });
   });

   describe('when timezoneIsEditable is false', () => {
   const wrapper = shallow(
   <TwelveHoursMode
   hour={'01'}
   minute={'45'}
   focused={true}
   phrases={phrases}
   showTimezone={true}
   timezoneIsEditable={false}
   />
   );

   it('should not render the TimeZonePicker', () => {
   expect(wrapper.find('TimeZonePicker')).to.have.lengthOf(0);
   });
   });
   */
});
