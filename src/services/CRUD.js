import http from './Axios'

const crudService = {

async getData(endpoint){
    try {
        const response = await http.get(endpoint);
        return response.data;
    } catch (error) {
        throw error; // Handle or log the error as needed
    }
}
,
async editCards(editedData){
    try {
        const response = await http.put(`/cards/${editedData.id}`, editedData);
        return response.data;
    } catch (error) {
        throw error; // Handle or log the error as needed
    }
},

async deleteCards(id){
    try {
        const response = await http.delete(`/cards/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Handle or log the error as needed
    }
},

async createCard(card){
    try {
        const response = await http.post('/cards', card);
        return response.data;
    } catch (error) {
        throw error; // Handle or log the error as needed
    }
}

}
export default crudService;