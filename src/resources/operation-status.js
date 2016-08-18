import {BindingEngine, customElement, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';


@customElement('operation-status')
@inject(BindingEngine)
export class operationstatus {

    @bindable errors;
    @bindable autofocus;
    @bindable status;

    constructor(bindingEngine) {
        this.bindingEngine = bindingEngine;
        this.spinner = false;
        this.showModal = false;
        this.disable = true;
    }





    bind(bindingContext, overrideContext) {

        let status = this.status;

        let subscription = this.bindingEngine
            .propertyObserver(this.status, 'isBusy')
            .subscribe((newValue, oldValue) => {

                let isBusy = newValue;
                let localStatus = status;
                this.updateControls(isBusy, localStatus);
            }
            );


    }


    updateControls(isBusy, localStatus) {

        if (isBusy)
            this.showProgress(localStatus);
        else
            this.hideProgress(localStatus);

        this.spinner = isBusy;

        $("#" + localStatus.formName + " :input").prop("disabled", isBusy);


    }


    showProgress(status) {

        if (!this.showModal) return;

        let modalStatus = $('#pleaseWaitDialog').hasClass('in');
        if (!modalStatus)
            $('#pleaseWaitDialog').modal('show');
    }

    hideProgress(status) {

        if (!this.showModal) return;

        setTimeout(function () {

            let modalStatus = $('#pleaseWaitDialog').hasClass('in');

            if (status.isBusy == false && modalStatus)
                $('#pleaseWaitDialog').modal('hide');
        }, 2000);
    }


}