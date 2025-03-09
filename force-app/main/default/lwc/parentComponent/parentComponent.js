import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message='';
    handleChange(event)
    {
        this.message=event.target.value;
    }
}