import { Renderer, ElementRef } from '@angular/core';
import { Config } from '../../config/config';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { BlockerDelegate, GestureController } from '../../gestures/gesture-controller';
/**
 * @private
 */
export declare class ActionSheetCmp {
    private _viewCtrl;
    private _elementRef;
    d: {
        title?: string;
        subTitle?: string;
        cssClass?: string;
        buttons?: Array<any>;
        enableBackdropDismiss?: boolean;
        cancelButton: any;
    };
    descId: string;
    enabled: boolean;
    hdrId: string;
    id: number;
    mode: string;
    gestureBlocker: BlockerDelegate;
    constructor(_viewCtrl: ViewController, config: Config, _elementRef: ElementRef, gestureCtrl: GestureController, params: NavParams, renderer: Renderer);
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidLeave(): void;
    ionViewDidEnter(): void;
    keyUp(ev: KeyboardEvent): void;
    click(button: any): void;
    bdClick(): void;
    dismiss(role: any): Promise<any>;
    ngOnDestroy(): void;
}
