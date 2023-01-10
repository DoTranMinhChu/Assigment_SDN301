export class PlayerController {
    async getList() {
        return [
            {
                name: 'Chu',
                point: 1
            },
            {
                name: 'Chu',
                point: 2
            }
        ]
    }
    async create(req, res) {
        return {
            name: 'Chu',
            point: 1
        }
    }
    async getItem(req, res) {
        return {
            name: 'Chu',
            point: 1
        }
    }
    async update(req, res) {
        return {
            name: 'Chu',
            point: 1
        }
    }
    async delete(req, res) {
        return {
            name: 'Chu',
            point: 1
        }
    }

}
