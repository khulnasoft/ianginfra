"""Add message table

Revision ID: 325180f0c4e1
Revises: 631faacf5da2
Create Date: 2024-06-23 21:29:28.220100

"""

from typing import Sequence, Union

import sqlalchemy as sa
import sqlmodel
from alembic import op

from langinfra.utils import migration

# revision identifiers, used by Alembic.
revision: str = "325180f0c4e1"
down_revision: Union[str, None] = "631faacf5da2"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    if not migration.table_exists("message", conn):
        op.create_table(
            "message",
            sa.Column("timestamp", sa.DateTime(), nullable=False),
            sa.Column("sender", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
            sa.Column("sender_name", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
            sa.Column("session_id", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
            sa.Column("text", sqlmodel.sql.sqltypes.AutoString(), nullable=False),
            sa.Column("id", sqlmodel.sql.sqltypes.types.Uuid(), nullable=False),
            sa.Column("flow_id", sqlmodel.sql.sqltypes.types.Uuid(), nullable=True),
            sa.Column("files", sa.JSON(), nullable=True),
            sa.ForeignKeyConstraint(
                ["flow_id"],
                ["flow.id"],
            ),
            sa.PrimaryKeyConstraint("id"),
        )
    # ### end Alembic commands ###


def downgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    if migration.table_exists("message", conn):
        op.drop_table("message")
    # ### end Alembic commands ###
