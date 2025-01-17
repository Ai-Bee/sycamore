
export function useRandomIDGenerator(prefix = 'id', length) {

    const generateId = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        const dateTimeString = new Date().toISOString().replace(/[-:]/g, '').replace('T', '').replace(/\..+/, '');
        let id = `${prefix}_${dateTimeString}`;
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          id += characters.charAt(randomIndex);
        }
      
        return id;
      }

      return { generateId }
}