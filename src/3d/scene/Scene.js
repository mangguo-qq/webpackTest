import Render from "../render/render";
import { Scene } from "../../libs/three.module.js";

export default class D3Scene {
    constructor() {
        this._render = new Render();
        this._scene = new Scene();
    }
}