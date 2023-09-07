import ClassController from "./class.controller.js";
import StorageServices from "../services/storage.services.js";

const storageService = new StorageServices();

export default class StorageController extends ClassController{
  constructor() {
    super(storageService);
  }
}