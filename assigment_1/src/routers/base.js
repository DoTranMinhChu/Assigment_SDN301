export class BaseRouter {
    constructor() {

    }
    onError(res, error) {
        if (!error.options) {
            console.log("UNKNOW ERROR", error)
            const err = errorService.router.somethingWentWrong()
            res.status(err.options.code).json(err.options)
        } else {
            res.status(error.options.code).json(error.options)
        }
    }

    onSuccess(res, object = {}, extras = {}) {
        object = object || {}
        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: Object.assign({
                    object
                }, extras)
            })
        }
    }
    onSuccessAsList(res, objects = [], extras = {}, option = {
        offset: 0, limit: config.database.defaultPageSize
    }) {
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        const page = _.floor(option.offset / option.limit) + 1
        res.json({
            code: 200,
            results: Object.assign({
                objects
            }, extras),
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': option.limit
            }
        })
    }

    route(func) {
        return (req, res) => func
            .bind(this)(req, res)
            .catch((error) => {
                console.log('error ===> ', error)
            })
    }
}