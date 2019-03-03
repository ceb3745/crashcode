import requests as r

def main():
    base_url = 'http://api.paiza.io'
    end_url = '&language=python3&api_key=guest'

    code = "print('hello world')"

    sc = { 'source_code' : code, 'language' : 'python3', 'api_key' : 'guest'}

    response = r.get('http://api.paiza.io/runners/create', params=sc)

    print(response)

main()