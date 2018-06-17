export default class HttpService {
    constructor(url, data, onSuccess, OnError) {
        this.url = url;
        this.data = data;
        this.onSuccess = onSuccess;
        this.OnError = OnError;
    }

    postWithJSON() {
        var request = new Request(this.url, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(request)
            .then(response => {
                return response.json()
            }).then(this.onSuccess).catch(this.OnError);
    }

    Get() {
        fetch(this.url)
            .then(response => {
                return response.json();
            }).then(this.onSuccess).catch(this.OnError);
    }

    PostWithPromise() {
        return new Promise((resolve, reject) => {
            var request = new Request(this.url, {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });

            return fetch(request)
                .then(response => {
                    if(response.ok) {
                        resolve(response.json());
                    }
                    else {
                        reject('Something went wrong !!');
                    }
                }, error => {
                    console.log(error);
                    reject(new Error(error.message))
                })
        });
    }

    GetWithPromise() {
        return new Promise((resolve, reject) => {
            return fetch(this.url)
                .then(response => {
                    if(response.ok) {
                        resolve(response.json());
                    }
                    else {
                        reject('Something went wrong !!');
                    }
                }, error => {
                    console.log(error);
                    reject(new Error(error.message))
                })
        });
    }
}
