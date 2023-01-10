import * as express from 'express';
import { BaseRouter } from './base.js';

export class NationalRouter extends BaseRouter {
    constructor(controller) {
        super();
        this.controller = controller;
        this.router = express.Router();
        this.defaultRouting();
    }
    controller;
    router;
    defaultRouting() {
        this.router.get('/', this.route(this.getList));
        this.router.get('/:id', this.route(this.getItem));
        this.router.post('/', this.route(this.create));
        this.router.put('/:id', this.route(this.update));
        this.router.delete(
            '/:_id',
            this.route(this.delete)
        );
        this.router.delete(
            '/',
            this.route(this.deleteAll)
        );
    }

    async getList(req, res) {
        const result = await this.controller.getList();
        this.onSuccess(res, result);
    }

    async getItem(req, res) {

        const { _id } = req.params;
        const result = await this.controller.getItem();
        this.onSuccess(res, result);
    }

    async create(req, res) {
        const result = await this.controller.create(req.body);
        this.onSuccess(res, result);
    }

    async update(req, res) {
        const { _id } = req.params;
        const result = {}
        this.onSuccess(res, result);
    }

    async delete(req, res) {
        const { _id } = req.params;
        const result = {};
        this.onSuccess(res, result);
    }

}

