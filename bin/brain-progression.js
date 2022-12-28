#!/usr/bin/env node

import engaine from '../src/index.js';
import { rules, giveTaskAndTrueAnswer } from '../src/games/brain-progression.js';

engaine(rules, giveTaskAndTrueAnswer);
