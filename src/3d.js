import * as THREE from "./libs/three.module.js";

import Render from "./3d/render/render.js";
import D3Math from "./3d/core/Math.js";
import Scene from "./3d/scene/Scene.js";

//export modules
const D3 = {
    ...THREE,
    Math: D3Math,
    Render: Render,
    Scene: Scene
};

export { D3 };