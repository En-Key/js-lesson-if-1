const typeUser = 'admin'; // user, guest, bot

switch (typeUser) {
    case 'admin':
        console.log('Вы администратор');
        break;
    case 'user':
        console.log('Вы пользователь');
        break;
    case 'bot':
        console.log('Вы бот');
        break;
    default:
        console.log('Вы непонятно кто');       
}

