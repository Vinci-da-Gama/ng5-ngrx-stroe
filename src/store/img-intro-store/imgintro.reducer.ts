import { ImgPathModel } from '../../contracts/models/img.model';
import * as fromAppReducer from '../app-store/app.reducers';
import * as imgAction from './imgintro.actions';

export interface ImgIntroFeatureState extends fromAppReducer.AppState {
	imgIntro: ImgIntroStateInterface
}

export interface ImgIntroStateInterface {
	imgIntro: ImgPathModel[]
}

const initialImgIntroState: ImgIntroStateInterface = {
	imgIntro: [
		{ imgPath: '../../assets/imgs/ng5/advantage about aot.png' },
		{ imgPath: '../../assets/imgs/ng5/aot_process.png' },
		{ imgPath: '../../assets/imgs/ng5/dev_Tools.png' },
		{ imgPath: '../../assets/imgs/ng5/header-Load.png' },
		{ imgPath: '../../assets/imgs/ng5/L118_home_route_active.png' },
		{ imgPath: '../../assets/imgs/ng5/L178.png' },
		{ imgPath: '../../assets/imgs/ng5/L249.png' },
		{ imgPath: '../../assets/imgs/ng5/L286.png' },
		{ imgPath: '../../assets/imgs/ng5/L302_Redux.png' },
		{ imgPath: '../../assets/imgs/ng5/L302_a.png' },
		{ imgPath: '../../assets/imgs/ng5/L302.png' },
		{ imgPath: '../../assets/imgs/ng5/L369.png' },
		{ imgPath: '../../assets/imgs/ng5/L390.png' }
	]
};

export function Ng5ImgIntroReducer(state = initialImgIntroState, action: imgAction.ImgIntroAction) {
	switch (action.type) {
		case (imgAction.SET_IMGS):
			return {
				...state,
				imgIntro: [...action.payload]
			}
		default:
			return state;
	}
}
