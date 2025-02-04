/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright (C) 2023 PureSoftware. All rights reserved.                                          ~
 ~                                                                                                ~
 ~ This framework is the proprietary property of PureSoftware. Unauthorized copying,              ~
 ~ modification, distribution, or use of this software is strictly prohibited without the         ~
 ~ prior written consent of PureSoftware.                                                         ~
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import {CInitializeLoader, CommandQueueController, CoreGame, Logger, SignalSphere, TCoreGameConfig, Timer} from "../../../dist";
import {BaseGameSuperState} from "./BaseGameSuperState";
import {gameConfig} from "./GameConfig";


	override setupEnvironment(): void {
		//
	}

	override initGame(): void {
		this.stateManager.SetSuperState(BaseGameSuperState);
	}
}



new MainGame(gameConfig);
