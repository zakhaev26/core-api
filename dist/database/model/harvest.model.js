"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Harvest = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const harvestSchema = new mongoose_1.Schema({
    quantity: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Quantity',
        required: true
    },
    crop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Crop', // Reference to the Crop model
        required: true,
        immutable: true
    },
    rate: {
        type: Number,
        required: true
    },
    farmer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true,
        immutable: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    producedAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    },
    bestUntil: {
        type: Number,
        required: false
    }
});
exports.Harvest = mongoose_1.default.model('Harvest', harvestSchema, 'harvests');
