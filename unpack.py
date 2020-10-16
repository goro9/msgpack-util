#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import msgpack
import base64
import json
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]

with open(input_path, 'rb') as f:
    msgpack_in = f.read()

json_out = msgpack.unpackb(msgpack_in, use_list=False, raw=False)
print(json_out)

# Write json
with open(output_path, 'w') as f:
    json.dump(json_out, f, indent=4)