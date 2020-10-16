#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import msgpack
import base64
import json
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]

json_in = json.load(open(input_path, 'r'))

packer = msgpack.Packer()
msgpack_out = packer.pack(json_in)
print(msgpack_out.hex())

# Write msgpack file
with open(output_path, 'wb') as f:
    f.write(msgpack_out)