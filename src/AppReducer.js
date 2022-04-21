export default function reducer (state,action) {
    switch(action.type){
        case 'Delete-transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=> transaction.id !==action.payload)
            }
        case 'Add-transaction':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state 
    }
}