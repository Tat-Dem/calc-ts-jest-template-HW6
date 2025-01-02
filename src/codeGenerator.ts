   export function codeGeneratorEstonian(): string{
    const prefix = "EST-";
    const randomNumber = Math.floor (1000 + Math.random() * 9000);
    return prefix + randomNumber;
   }

   export function codeGeneratorLatvian(): string{
       const prefix = "LVA-";
       const randomNumber = Math.floor (1000 + Math.random() * 9000);
       return prefix + randomNumber;
   }

   export function codeGeneratorLithuanian(): string{
       const prefix = "LTU-";
       const randomNumber = Math.floor (1000 + Math.random() * 9000);
       return prefix + randomNumber;
   }