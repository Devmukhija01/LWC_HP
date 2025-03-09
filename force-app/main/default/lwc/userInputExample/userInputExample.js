import { LightningElement,track } from 'lwc';

export default class UserInputExample extends LightningElement {
    @track userInfo = {
        name: '',
        phone: '',
        address: ''
    };
    handleNameChange(event)
    {
        this.name=event.target.value;
    }
    handlePhoneChange(event)
    {
        this.phone=event.target.value;
    }
    handleAddressChange(event)
    {
        this.address=event.target.value;
    }
    handleClick()
    {
        this.userInfo.name=this.name;
        this.userInfo.phone=this.phone;
        this.userInfo.address=this.address;
    }
}