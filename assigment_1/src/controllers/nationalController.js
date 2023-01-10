export class NationalController {
    async getList() {
        return [
            {
                name: 'Vietnam',
                timezone: '+07:00'
            },
            {
                name: 'Korean',
                timezone: '+09:00'
            }
        ]
    }
    async create(req, res) {
        return {
            name: 'Vietnam',
            timezone: '+07:00'
        }
    }
    async getItem(req, res) {
        return {
            name: 'Vietnam',
            timezone: '+07:00'
        }
    }
    async update(req, res) {
        return {
            name: 'Vietnam',
            timezone: '+07:00'
        }
    }
    async delete(req, res) {
        return {
            name: 'Vietnam',
            timezone: '+07:00'
        }
    }

}
