import { Action } from '@ngrx/store';
import { ImgPathModel } from '../../contracts/models/img.model';

export const SET_IMGS = 'SET_IMGS';

export class SetImages implements Action {
	readonly type = SET_IMGS;
	constructor(
		public payload: ImgPathModel[]
	) { }
}

export type ImgIntroAction = SetImages;
