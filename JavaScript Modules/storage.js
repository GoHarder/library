/** Creates a storage object in Local Storage or Session Storage. */
export default class Storage {
   /**
    * @param {('local'|'session')} _location The type of storage.
    * @param {string} _key The key for the storage location.
    */
   constructor(_location, _key) {
      /** @property The type of storage */
      this.location = _location;
      /** @property Name of the storage key. */
      this.key = _key;

      const data = this._get();

      if (!data) {
         this._set({});
      }
   }

   /**
    * Inserts a single document into the store.
    * @param {Object} doc The document to be stored.
    */
   insertOne(doc) {
      const data = this._get();
      const _id = this._id();
      let output = false;

      if (!doc.hasOwnProperty('_id')) {
         doc = { _id, ...doc };
         data[_id] = doc;
         this._set(data);
         output = true;
      }

      return output;
   }

   /**
    * Finds multiple documents based on the query.
    * @param {string[]} query The query to search for the documents.
    */
   find(query) {
      const data = this._get();
      let output = [];

      for (const key in data) {
         output.push(data[key]);
      }

      query.forEach(rule => {
         const ruleKey = rule.split('=')[0];
         const ruleValue = rule.split('=')[1];
         output = output.filter(doc => doc[ruleKey] === ruleValue);
      });

      return output;
   }

   /**
    * Finds the first document based on the query.
    * @param {string[]} query The query to search for the documents.
    */
   findOne(query) {
      return this.find(query).length !== 0 ? this.find(query)[0] : false;
   }

   /**
    * Finds the first document based on the query and deletes it.
    * @param {string[]} query The query to search for the documents.
    */
   findOneAndDelete(query) {
      const data = this._get();
      const doc = this.findOne(query);
      let output = false;

      if (doc) {
         delete data[doc._id];
         this._set(data);
         output = true;
      }

      return output;
   }

   /**
    * Update a document with the same _id.
    * @param {Object} doc The document to be stored.
    */
   updateOne(doc) {
      const data = this._get();
      const _id = doc._id;
      let output = false;

      if (_id) {
         const oldDoc = this.findOne([`_id=${_id}`]);

         if (oldDoc) {
            data[_id] = doc;

            this._set(data);
            output = true;
         }
      }

      return output;
   }

   /** (Internal) Get data out of Local Storage and make into an object. */
   _get() {
      let output = false;

      if (this.location === 'session') {
         output = sessionStorage.getItem(this.key);
      } else if (this.location === 'local') {
         output = localStorage.getItem(this.key);
      }

      output = JSON.parse(output);
      return output;
   }

   /** (Internal) Take data object make it into a string and put into storage. */
   _set(data) {
      data = JSON.stringify(data);

      if (this.location === 'session') {
         output = sessionStorage.setItem(this.key, data);
      } else if (this.location === 'local') {
         output = localStorage.setItem(this.key, data);
      }
   }

   /** (Internal) Create an id for each document to be stored. */
   _id() {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let output = '';

      for (let i = 1; i <= 20; i++) {
         output += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return output;
   }
}
