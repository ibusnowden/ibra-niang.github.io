require 'webrick'

server = WEBrick::HTTPServer.new(
  Port: 8000,
  DocumentRoot: Dir.pwd
)

trap('INT') { server.shutdown }
server.start 