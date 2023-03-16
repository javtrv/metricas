from flask import jsonify

def response(data):
    return jsonify({
        'success':True,
        'data':data
    }),200
    

def not_found():
    return jsonify({
        'success':False,
        'data':{},
        'message':"Not found",
        'code':404
    }),404
    
    
def bad_request(message):
    print("MENSAJE EN BAD REQUEST")
    print(message)
    return jsonify({
        'success':False,
        'data':{},
        'message':str(message),
        'code':400
    }),400