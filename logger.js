export default function logger(reducer) {
    return (prepState ,action, args) => {
        console.group(action)
        console.log('Prev State:',prepState)
        console.log(' Action Arguments:',args)
        
        const nextState = reducer(prepState, action, args)
        console.log('Next State:',nextState)
        
        console.groupEnd()
        return nextState    

    }
}