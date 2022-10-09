#!/bin/bash

# TODO: more checking, adding multiple authors

function addAuthor() {
  AUTHOR_USERNAME="$1"

  #author full name
  echo -n "Author full username: "
  read AUTHOR_FULLNAME

  #author title
  echo -n "Give a short description of yourself: "
  read AUTHOR_TITLE

  #author gh link
  echo -n "Author website (github link): "
  read AUTHOR_WEBSITE

  #author image url
  echo -n "Author image url: "
  read AUTHOR_IMAGE

  echo -e "\n$AUTHOR_USERNAME:\n\tname: $AUTHOR_FULLNAME\n\ttitle: $AUTHOR_TITLE\n\turl: $AUTHOR_WEBSITE/n/timage_url: $AUTHOR_IMAGE" >> ./authors.yml
}

# check if user is in the authors already
echo -n "Author username: "
read NAME
if grep -Fxq "$NAME:" authors.yml
then
  echo "name found"
else
  echo "name not found"
  addAuthor $NAME
fi

echo -n "Blogpost title: "
read POST_TITLE

echo -n "Blogpost slug: "
read POST_SLUG

echo -n "Blogpost tags (seperated by comma's): "
read POST_TAGS

DATE=$(date +"%Y-%m-%d")
FILENAME="$DATE-$POST_SLUG.md"

touch $FILENAME



echo -e "---\nslug: $POST_SLUG\ntitle: $POST_TITLE\nauthors: [$AUTHOR_USERNAME]\ntags: [$POST_TAGS]\n---\n" >> $FILENAME
echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet" >>  $FILENAME
