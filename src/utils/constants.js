import moment from 'moment'


export const GEO_API = 'AIzaSyBIK-MDJ7k5c3OfU4ZoCsquP5o2CMKdtw0';

export const formatDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
}


export const formatHour = (date) => {
    return  moment(date).format('h:mm a')
}