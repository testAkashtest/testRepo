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

export class MainGame extends CoreGame {
	constructor(config: TCoreGameConfig) {
		super(config);
		CommandQueueController.getCommand(CInitializeLoader)?.execute();
		SignalSphere.addEventListener(
			"basegame_assets_loaded",
			() => {
				this.create();
			},
			this,
		);
	}

	protected create() {
		Timer.delayedCall(500, () => {
			Logger.log("chal gya bhai m");
		});
		Timer.delayedLoopCall(500, () => {
			// Timer.killDelayedCall(delayloopcall);
			Logger.log("chal gya loop bhai m");
		});
		Timer.delayedRepeatCall(1000, 5, () => {
			Logger.log("chal gya repeat bhai m");
			Timer.killAllDelayedCalls();
			// Timer.killDelayedCall(repeat);
		});
	}

	override setupEnvironment(): void {
		//
	}

	override initGame(): void {
		this.stateManager.SetSuperState(BaseGameSuperState);
	}
}

new MainGame(gameConfig);
